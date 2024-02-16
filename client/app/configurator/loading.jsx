import ImagePreloader from "@/components/Preloaders/ImagePreloader";

export default function ConfiguratorPageLoading() {
    return (
        <div className="min-h-[calc(100vh-86px)] bg-white flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <ImagePreloader ml={false} />
                <h1 className="text-center">Loading models and textures...</h1>
            </div>
        </div>
    )
}