import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-scree w-full text-black grid grid-cols-1 gap-24">
      <section>
        <Image src='/assets/shape.svg' alt="shape" width={200} height={200} />
      </section>

      <section className="w-full h-full flex justify-center">
        <Image src='/assets/undraw_done_checking.svg' alt="done-checking" width={200} height={300} />
      </section>

      <section className="w-4/6 mx-auto grid gap-4 text-center">
        <h2 className="text-xl font-bold">Gets things with TODs</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</p>
      </section>

      <section className="w-4/5 mb-5 mx-auto flex justify-center text-center text-white">
        <Link href='/registeration' className="p-3 w-full bg-primary rounded-sm font-bold">Get Started</Link>
      </section>
    </main>
  );
}
