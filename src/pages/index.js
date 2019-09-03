import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Button extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_gayUauBa9ZMk6x6sks2AWrM200CgXXjbGl');
  }

  render() {
    return (
      <form onSubmit={event => {
        event.preventDefault();
        this.stripe.redirectToCheckout({
          items: [{sku: 'sku_Fj1SLso5weXs47', quantity: 1}],
    
          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: 'http://localhost:8000/success',
          cancelUrl: 'http://localhost:8000/canceled',
        })
        .then(function (result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      }}>
        <button type="submit">acheter premier produit</button>
      </form>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Site de la couture</h1>
    <Button />
  </Layout>
)

export default IndexPage
