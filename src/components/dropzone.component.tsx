import { useDropzone } from "react-dropzone";
import { FC } from "react";

interface DropzoneProps {
  className?: string;
}

const Dropzone: FC<DropzoneProps> = ({ className }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
  });
  return (
    <div
      className={
        className
          ? className
          : "flex items-center justify-center rounded-lg border-dashed border-2 border-white h-52"
      }
    >
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="text-white text-center">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
    </div>
  );
};

export default Dropzone;
