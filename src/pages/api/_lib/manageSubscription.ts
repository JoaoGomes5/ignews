import { query as q} from 'faunadb'

import { stripe } from "../../../services/stripe";
import { fauna } from "../../../services/fauna";

export async function saveSubscription(
  subscriptionid: string,
  customerId: string,
  createAction = false
  )  {
    console.log(subscriptionid,customerId );
    
    // Buscar o user no fauna db com o customer_id
    const userRef = await fauna.query(
      q.Select(
        "ref",
        q.Get(
          q.Match(
            q.Index('user_by_stripe_customer_id'),
            customerId
          )
        )
      )
    );

    // Guardar os dados da subscription no fauna
    const subscription = await stripe.subscriptions.retrieve(subscriptionid);
    const subscriptionData = {
      id: subscription.id,
      userId: userRef,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id
    }

    if(createAction){
      await fauna.query(
        q.Create(
          q.Collection('subscriptions'),
          { data: subscriptionData }
        )
      )
    } else {
      await fauna.query(
        q.Replace(
          q.Select(
            "ref",
            q.Get(
              q.Match(
                q.Index('subscription_by_id'),
                subscription.id
              )
            )
          ),
          {
            data: subscriptionData
          }
        )
      )
    }
   


}