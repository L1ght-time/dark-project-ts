import { ChangeEvent, useRef, useState } from 'react';

import { FILE_MAX_SIZE } from '../constants';

export const useUploadFile = () => {
  const files = useRef<FileList | null>(null);
  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);
  const handleUploadFile = (event: ChangeEvent) => {
    if (!(event.target as HTMLInputElement).files?.length) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setImageUrl(reader.result);

    if (event?.target) {
      files.current = (event.target as HTMLInputElement).files;
    }
    if (files.current) {
      if (files.current[0].size <= FILE_MAX_SIZE) {
        reader.readAsDataURL(files.current[0]);
      } else {
        files.current = null;
      }
    }
  };

  return { imageUrl, handleUploadFile };
};
