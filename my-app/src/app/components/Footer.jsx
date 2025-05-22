"use client";

import * as Dialog from "@radix-ui/react-dialog";
import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 flex justify-between items-center">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Contact Me
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-xl font-bold mb-4">
              Send me a message
            </Dialog.Title>
            <ContactForm />
            <Dialog.Close asChild>
              <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
                ✕
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Kyle Beck
      </p>
    </footer>
  );
}
