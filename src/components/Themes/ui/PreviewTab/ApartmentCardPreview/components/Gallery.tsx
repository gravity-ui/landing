import {ChevronLeft, ChevronRight} from '@gravity-ui/icons';
import {Button, Card, Flex, Icon, spacing} from '@gravity-ui/uikit';
import {useState} from 'react';

interface GalleryProps {
    photos: Array<{src: string}>;
    className?: string;
}

export function Gallery({photos, className}: GalleryProps) {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    return (
        <Flex gap={2} direction="column" className={className}>
            <Card view="clear" overflow="hidden" position="relative">
                <Flex justifyContent="center" alignItems="center" overflow="hidden">
                    <img style={{width: '100%'}} src={photos[currentPhotoIndex].src} />
                </Flex>

                <LeftGalleryButton
                    currentPhotoIndex={currentPhotoIndex}
                    totalPhotos={photos.length}
                    onIndexUpdate={setCurrentPhotoIndex}
                />
                <RightGalleryButton
                    currentPhotoIndex={currentPhotoIndex}
                    totalPhotos={photos.length}
                    onIndexUpdate={setCurrentPhotoIndex}
                />
            </Card>

            <Flex position="relative">
                <Flex height="80px" gap={2} overflow="x">
                    {photos.map((photo, index) => {
                        return (
                            <Card
                                key={index}
                                type="selection"
                                view="outlined"
                                selected={index === currentPhotoIndex}
                                overflow="hidden"
                                role="button"
                                style={{cursor: 'pointer'}}
                                onClick={() => {
                                    setCurrentPhotoIndex(index);
                                }}
                            >
                                <img style={{height: '100%', objectFit: 'fill'}} src={photo.src} />
                            </Card>
                        );
                    })}
                </Flex>

                <LeftGalleryButton
                    currentPhotoIndex={currentPhotoIndex}
                    totalPhotos={photos.length}
                    onIndexUpdate={setCurrentPhotoIndex}
                />

                <RightGalleryButton
                    currentPhotoIndex={currentPhotoIndex}
                    totalPhotos={photos.length}
                    onIndexUpdate={setCurrentPhotoIndex}
                />
            </Flex>
        </Flex>
    );
}

interface GalleryButtonProps {
    currentPhotoIndex: number;
    totalPhotos: number;
    onIndexUpdate: (index: number) => void;
}

function LeftGalleryButton({currentPhotoIndex, totalPhotos, onIndexUpdate}: GalleryButtonProps) {
    if (currentPhotoIndex === 0) {
        return null;
    }

    return (
        <Button
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 0,
            }}
            className={spacing({ml: 2})}
            view="raised"
            onClick={() => {
                let nextIndex = currentPhotoIndex - 1;

                if (nextIndex < 0) {
                    nextIndex = totalPhotos;
                }

                onIndexUpdate(nextIndex);
            }}
        >
            <Icon data={ChevronLeft} size={16} />
        </Button>
    );
}

function RightGalleryButton({currentPhotoIndex, totalPhotos, onIndexUpdate}: GalleryButtonProps) {
    return (
        <Button
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: 0,
            }}
            className={spacing({mr: 2})}
            view="raised"
            onClick={() => {
                let nextIndex = currentPhotoIndex + 1;

                if (nextIndex >= totalPhotos) {
                    nextIndex = 0;
                }

                onIndexUpdate(nextIndex);
            }}
        >
            <Icon data={ChevronRight} size={16} />
        </Button>
    );
}
