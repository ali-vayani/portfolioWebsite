import Image from "next/image"
import { photos } from "../data/data"
import { motion } from "framer-motion"

export default function PhotoGallery() {
    return (
        <div>
            {/* Desktop: Vertical layout */}
            <div className="hidden lg:flex flex-col gap-2">
                {photos.map((image, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{
                                rotate: -1*image.rotation,
                                zIndex: 0,
                            }}
                            whileHover={{
                                rotate: 0,
                                scale: 1.20,
                                zIndex: 100,
                                transition: { duration: 0.3 }
                            }}
                            className="rounded-lg"
                            style={{
                                marginLeft: `${index }px`,
                                marginTop: `${index * -15}px`
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.zIndex = "100";
                            }}
                        >
                        <Image
                            src={image.image}
                            alt={image.alt}
                            width={425}
                            height={425}
                            className="rounded-lg shadow-lg"
                        />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}