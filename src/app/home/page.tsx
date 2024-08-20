
import Aspirations from "@/components/aspirations";
import Customer_support from "@/components/customer_support";
import Our_story from "@/components/our-story";
import Our_mission from "@/components/our_mission";
import Our_services from "@/components/our_services";
import Out_products from "@/components/out_products";
import Philosophy from "@/components/philosophy";


export default function Home() {
  return (
    <>
      <Our_story />
      <Our_mission />
      <Philosophy />
      <Out_products />
      <Our_services />
      <Aspirations />
      <Customer_support />
    </>
  )
}