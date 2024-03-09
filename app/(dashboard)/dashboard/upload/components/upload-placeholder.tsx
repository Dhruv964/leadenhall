"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import BlozumLogo from "@/public/blozum.svg";
import Image from "next/image";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  file: z.any(),
});

export function UploadPlaceholder() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      file: null,
    },
  });

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    if (typeof acceptedFiles[0] === "undefined") return;

    const formData = new FormData();

    formData.append("file", acceptedFiles[0]);
    formData.append("name", values.name);

    const response = await fetch("../api/uploadPDF", {
      method: "POST",
      body: formData,
    });

    const response1 = await fetch("../api/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        to: "tanmay.juneja@blozum.com",
        name: "Lobo",
        subject: "New Document Alert!",
        body: "<h1>New PDF uploaded on appwrite</h1>",
      }),
    });
  }

  const removeFile = useCallback(() => {
    setPreview(null); // Remove the preview
    form.setValue("file", null); // Reset the form value for the file
  }, [form]);

  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <div className="flex items-center space-x-3">
          <MdOutlineDocumentScanner className="text-[50px]" />
          <FaPlus className="text-[25px]" />
          <Image src={BlozumLogo} alt="" height={50} width={50} />
        </div>

        <h3 className="m-4 text-lg font-semibold"></h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-[300px] space-y-5"
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="File Name" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="file"
              control={form.control}
              render={({ field }) => {
                return (
                  <div {...getRootProps()} className="dropzone" {...field}>
                    <input {...getInputProps({ accept: "application/pdf" })} />
                    {isDragActive ? (
                      <p>Drop the file here ...</p>
                    ) : (
                      <p>
                        Drag 'n' drop a file here, or click to select a file
                      </p>
                    )}
                    <FormMessage />
                  </div>
                );
              }}
            />
            {preview && (
              <div>
                <img src={preview as string} alt="File Preview" />
                <Button
                  type="button"
                  onClick={removeFile}
                  className="mt-2 text-sm bg-red-400 text-red-800 hover:bg-red-400"
                >
                  Remove file
                </Button>
              </div>
            )}
            <Button>Upload</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
