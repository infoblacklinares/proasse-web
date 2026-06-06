import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Catalog } from "@/components/sections/catalog";
import { Footer } from "@/components/sections/footer";
import { CartDrawer } from "@/components/ui/cart-drawer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-bg">
        <Hero />
        <Catalog />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
