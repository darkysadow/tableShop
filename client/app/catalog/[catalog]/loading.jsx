import MaterialPickerSkeleton from "@/components/Catalog/CatalogItem/MaterialPickerSkeleton";
import ProductImageSkeleton from "@/components/Catalog/CatalogItem/ProductImageSkeleton";

export default function CatalogLoading() {
    return (
        <div className="container mx-auto flex flex-col">
            <section className="flex flex-row my-10 gap-x-10">
                <div className="rounded w-32 h-[1.5rem] bg-[#00000032] animate-pulse"></div>
                <div className="rounded w-32 h-[1.5rem] bg-[#00000032] animate-pulse"></div>
                <div className="rounded w-32 h-[1.5rem] bg-[#00000032] animate-pulse"></div>
            </section>
            <section className="flex flex-row max-md:flex-col h-full">
                <ProductImageSkeleton />
                <div className="w-2/5 flex flex-col pb-96 max-md:w-full max-md:mt-9">
                    <div className="w-full flex flex-col max-md:flex-col-reverse">
                        <div className="flex flex-col gap-y-5">
                            <div className="rounded w-[80%] h-[2.9rem] bg-[#00000032] animate-pulse"></div>
                            <div className="flex flex-row gap-x-2 text-[#00000032]">
                                <div className="rounded w-24 h-[1.5rem] bg-[#00000032] animate-pulse"></div>|
                                <div className="rounded w-24 h-[1.5rem] bg-[#00000032] animate-pulse"></div>
                            </div>
                            <div className="quick-view-price flex flex-row gap-x-2 items-center my-5 text-2xl">
                                <div className="rounded w-36 h-[2.3rem] bg-[#00000032] animate-pulse"></div>
                            </div>
                            <hr />
                            <div className="py-4 px-2 flex flex-col gap-y-[1rem]">
                                <div className="rounded h-[1.125rem] w-[90%] bg-[#00000032] animate-pulse"></div>
                                <div className="rounded h-[1.125rem] w-[93%] bg-[#00000032] animate-pulse"></div>
                                <div className="rounded h-[1.125rem] w-[85%] bg-[#00000032] animate-pulse"></div>
                                <div className="rounded h-[1.125rem] w-[89%] bg-[#00000032] animate-pulse"></div>
                                <div className="rounded h-[1.125rem] w-[63%] bg-[#00000032] animate-pulse"></div>
                            </div>
                            <hr />
                        </div>
                        <MaterialPickerSkeleton />
                    </div>
                </div>
            </section>
        </div>
    )
}