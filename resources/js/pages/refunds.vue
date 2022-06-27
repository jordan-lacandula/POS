<template>
    <div>
        <page-header title="Refund and Returns Policy"></page-header>
        <section-basic v-for="section in sections" :key="section.id" :title="section.t" :content="section.c" :subcontent="section.subcontent"></section-basic>
    </div>
</template>

<script>
    import pageHeader from '../components/pageHeader'
    import sectionBasic from "../components/sectionBasic";
    export default {
        name: "refunds",
        components: {
            pageHeader,
            sectionBasic
        },
        data: function() {
            return {
                sections: [
                    {
                        id: 1, t: "Overview", c: "Our refund and returns policy lasts 15 days. If 15 days have passed since your purchase, we can’t offer you a refund or exchange.To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.Several types of goods are exempt from being returned. We do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.",
                        subcontent: [
                            { isHtml: true, t: "Additional non-returnable items:", c: "<ul><li>Gift cards / Coupons</li><li>Downloadable software products</li><li>Some health and personal care items</li><li>Services</li><li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li></ul>To complete your return, we require a receipt or proof of purchase.Please do not send your purchase back to the manufacturer." },
                            { isHtml: true, t: "There are certain situations where only partial refunds are granted:", c: "<ul><li>Items with obvious signs of use</li><li>Electronic products that has been opened.</li></ul>" },
                        ]
                    }, {
                        id: 2, t:"Refunds", c: "Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.",
                        subcontent: [
                            { t: "Late or missing refunds", c: "If you haven’t received a refund yet, first check your bank account again.Then contact your credit card company, it may take some time before your refund is officially posted.Next contact your bank. There is often some processing time before a refund is posted.If you’ve done all of this and you still have not received your refund yet, please contact us at support@nekobiz.com." },
                            { t: "Sale items", c: "Only regular priced items may be refunded. Sale items cannot be refunded." },

                        ]
                    },
                    { id: 3, t: "Exchanges", c: "We only replace items if they are defective ordamaged. If you need to exchange it for the same item, send us an email at support@nekobiz.com and wait for the response where you will be receiving the address where you'll be sending your items." },
                    { id: 4, t: "Gifts", c: "If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and they will find out about your return."},
                    { id: 5, t: "Shipping returns", c: "To return your product, you should email us at support@nekobiz.com and we will respond with the address where you will be sending your product.You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.Depending on where you live, the time it may take for your exchanged product to reach you may vary.If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item."},
                    { id: 6, t: "Need help?", c: "Contact us at support@nekobiz.com for questions related to refunds and returns."}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
