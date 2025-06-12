import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>

   <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">

      <img className="w-40 h-auto mb-6" src="/Ahly.png" alt="Ahly Logo" />

      <h2 className="font-bebas text-[36px] mb-4">
        Al Ahly <br />
        The Club of the Century Store Stay Tuned
      </h2>

      <Button className="font-bebas mt-12 text-3xl bg-black pt-6 pb-6 text-center transform hover:scale-105">
        Join the Waitlist
      </Button>
    </div>
    
    </>
    
  );
}
