import React from "react";
import GooglePayButton from '@google-pay/button-react';




const Payments = () => {
    return(
        <div style={{textAlign: "center", backgroundColor: "lightgreen"}}>
            <h4>Complete your payment</h4>
            
            <GooglePayButton
            environment="TEST"
            paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                    {
                        type: 'CARD',
                        parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],                           
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMarchantId',

                            },
                        },
                    },
                ],
                merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'TOTAL',
                    totalPrice: '100',
                    currencyCode: 'USD',
                    countryCode: 'US'
                },
                shippingAddressRequired: false,
                callbackIntents: ['PAYMENT_AUTHORIZATION'],
            }}

            onLoadPaymentData = { paymentRequest => {
                console.log('sucess', paymentRequest)
            }}

            onPaymentAuthorized = {paymentData => {
                console.log('Payment Authorised Sucess', paymentData)
                return({ transactionState: 'SUCCESS'})
            }}

            existingPaymentMethodRequired= 'false'
            buttonColor="black"
            buttonType="buy"
            />
            
        </div>
        
    )
}

export default Payments;