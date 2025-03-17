import Business_card from '@/app/components/Product_Details/business_card'
import FAQ from '@/app/components/Product_Details/faqs'
import ProductsSection from '@/app/components/Product_Details/Products/ProductsSection'
import Reviews from '@/app/components/Product_Details/reviews'
import React from 'react'

function Product_Details() {
  return (
    <div>
    <Business_card/>
    <Reviews/>
    <FAQ/>
    <ProductsSection />
    </div>
  )
}

export default Product_Details
