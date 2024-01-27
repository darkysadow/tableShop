export default function CatalogLoading() {
    return (
        <main className="w-full h-full">
            <section className="h-[55vh] max-[550px]:h-[40vh] relative flex justify-center items-center w-full catalog-head-block">
                <div className="flex flex-col justify-center items-center w-full z-[1] pt-10">
                    <div className='w-full gap-[3px] flex flex-col animate-pulse justify-center items-center '>
                        <div className='h-[2.9rem] w-[30%] bg-[#00000032] rounded'></div>
                    </div>
                    <div className="flex w-full flex-row text-sm text-[#aeaeae] gap-x-3 mt-4 tracking-widest">
                        <div className='w-full gap-[3px] flex flex-col justify-center items-center  animate-pulse'>
                            <div className='h-[2rem] w-[40%] bg-[#00000032] rounded'></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto flex flex-row flex-wrap my-28">
                <div className='w-[32%] max-md:w-full pb-8 mb-6 h-[60vh]'>
                    <div className='relative w-full h-full sale-card'>
                        <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full bg-[#00000032] animate-pulse top-[30%] flex justify-center items-center'></div>
                        <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full bg-[#00000032] animate-pulse top-[55%] flex justify-center items-center'></div>
                        <div className='absolute w-8 h-5/6 left-2 flex flex-col justify-center gap-y-3 z-10'>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                        </div>
                        <div className='w-full h-5/6 bg-[#00000032] rounded-md animate-pulse'></div>
                        {/* <div className='w-full sales-main-image'>
                            {previewMainImage && <Image priority={false} blurDataURL src={previewMainImage} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" main image"} onLoad={() => setMainImgLoaded(true)} />}
                        </div>
                        <div className='w-full sales-second-image'>
                            {previewSecondImage && <Image priority={false} blurDataURL src={previewSecondImage} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" second image"} onLoad={() => setSecondImgLoaded(true)} />}
                        </div> */}
                        <div className='overflow-x-hidden sale-card-bottom'>
                            <div className='px-2 my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'>
                            </div>
                            <div className='w-full h-7 absolute sale-card-bottom-effect'>
                                <div className=' my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'>
                                </div>
                                <div className='h-8 w-full absolute sale-card-addtocart font-rubik'>
                                    <div className=' my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[32%] max-md:w-full pb-8 mb-6 h-[60vh]'>
                    <div className='relative w-full h-full sale-card'>
                        <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full bg-[#00000032] animate-pulse top-[30%] flex justify-center items-center'></div>
                        <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full bg-[#00000032] animate-pulse top-[55%] flex justify-center items-center'></div>
                        <div className='absolute w-8 h-5/6 left-2 flex flex-col justify-center gap-y-3 z-10'>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                        </div>
                        <div className='w-full h-5/6 bg-[#00000032] rounded-md animate-pulse'></div>
                        {/* <div className='w-full sales-main-image'>
                            {previewMainImage && <Image priority={false} blurDataURL src={previewMainImage} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" main image"} onLoad={() => setMainImgLoaded(true)} />}
                        </div>
                        <div className='w-full sales-second-image'>
                            {previewSecondImage && <Image priority={false} blurDataURL src={previewSecondImage} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" second image"} onLoad={() => setSecondImgLoaded(true)} />}
                        </div> */}
                        <div className='overflow-x-hidden sale-card-bottom'>
                            <div className='px-2 my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'>
                            </div>
                            <div className='w-full h-7 absolute sale-card-bottom-effect'>
                                <div className=' my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'>
                                </div>
                                <div className='h-8 w-full absolute sale-card-addtocart font-rubik'>
                                    <div className=' my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[32%] max-md:w-full pb-8 mb-6 h-[60vh]'>
                    <div className='relative w-full h-full sale-card'>
                        <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full bg-[#00000032] animate-pulse top-[30%] flex justify-center items-center'></div>
                        <div className='sales-secondary-buttons absolute w-12 h-12 rounded-full bg-[#00000032] animate-pulse top-[55%] flex justify-center items-center'></div>
                        <div className='absolute w-8 h-5/6 left-2 flex flex-col justify-center gap-y-3 z-10'>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                            <div className={'relative w-8 h-8 flex justify-center items-center rounded-full bg-[#00000032] animate-pulse '}></div>
                        </div>
                        <div className='w-full h-5/6 bg-[#00000032] rounded-md animate-pulse'></div>
                        {/* <div className='w-full sales-main-image'>
                            {previewMainImage && <Image priority={false} blurDataURL src={previewMainImage} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" main image"} onLoad={() => setMainImgLoaded(true)} />}
                        </div>
                        <div className='w-full sales-second-image'>
                            {previewSecondImage && <Image priority={false} blurDataURL src={previewSecondImage} width={1920} height={1080} style={{ objectFit: 'contain', objectPosition: 'top' }} alt={" second image"} onLoad={() => setSecondImgLoaded(true)} />}
                        </div> */}
                        <div className='overflow-x-hidden sale-card-bottom'>
                            <div className='px-2 my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'>
                            </div>
                            <div className='w-full h-7 absolute sale-card-bottom-effect'>
                                <div className=' my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'>
                                </div>
                                <div className='h-8 w-full absolute sale-card-addtocart font-rubik'>
                                    <div className=' my-2 h-8 w-1/3 bg-[#00000032] animate-pulse inline-block'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}