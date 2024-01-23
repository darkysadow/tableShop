import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section className="h-[55vh] relative flex justify-center items-center bg-slate-400 w-full catalog-head-block">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <Image src={'/wtp/Atlant/oak_palena/third.jpg'} fill sizes="100%" style={{objectFit: "cover", objectPosition: "top"}} alt="Atlant Oak Palena Table" />
                </div>
                <div className="flex flex-col justify-center items-center z-[1]">
                    <h1 className="text-3xl font-medium text-black">Products</h1>
                    <div className="flex flex-row text-sm text-[#aeaeae] gap-x-3 mt-4 tracking-widest">
                        <Link href={'/'} className="transition md:hover:text-black">Home</Link> <span>/</span><p className="text-black">Catalog</p>
                    </div>
                </div>
            </section>
        </main>
    )
}