"use client"
import React, { FC, useRef, useEffect } from "react";
import cn from "classnames";
import { Portal } from "@reach/portal";

import { useUI } from "@/contexts/ui.context";
import useOnClickOutside from "@/utils/use-click-outside";
//import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock"; 

type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  rootClassName?: string;
  useBlurBackdrop?: boolean;
  containerClassName?: string;
  variant?: "default" | "center" | "bottom";
  closeOnOutsideClick?: boolean
};
type DivElementRef = React.MutableRefObject<HTMLDivElement>;

// variant based classes for modal root, container & close btn
const rootClasses = {
  center: "p-0 md:p-5",
  default: "p-4 md:p-5",
  bottom: "p-5 pb-0",
};
const containerClasses = {
  center: "h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg",
  default: "h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg",
  bottom: "h-full max-h-70vh bottom-0 ltr:rounded-tl-2xl rtl:rounded-tr-2xl ltr:rounded-tr-2xl rtl:rounded-tl-2xl",
};
const closeBtnClasses = {
  center: "-top-3.5 md:-top-4 ltr:-right-3.5 ltr:md:-right-4 rtl:-left-3.5 rtl:md:-left-4",
  default: "-top-3.5 md:-top-4 ltr:-right-3.5 ltr:md:-right-4 rtl:-left-3.5 rtl:md:-left-4",
  bottom: "top-1/4 ltr:left-1/2 rtl:right-1/2 transform -translate-y-1/2 -translate-x-1/2",
};

const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
  rootClassName,
  useBlurBackdrop,
  containerClassName,
  variant = "center",
  closeOnOutsideClick = true, // Default to true if not provided
}) => {
  const { closeModal } = useUI();
  const modalRootRef = useRef() as DivElementRef;
  const modalInnerRef = useRef() as DivElementRef;
  useOnClickOutside(modalInnerRef, () => {
    if (closeOnOutsideClick) {
      closeModal(false); // Close modal only if closeOnOutsideClick is true
    }
  });

  useEffect(() => {
    if (modalInnerRef.current) {
      if (open) {
        //   disableBodyScroll(modalInnerRef.current);
      } else {
        //    enableBodyScroll(modalInnerRef.current);
      }
    }
    return () => {
      //   clearAllBodyScrollLocks();
    };
  }, [open]);

  return (
    <Portal>

      {open && (
        <div
          className={cn(
            "modal-root fixed bg-black bg-opacity-70 inset-0 z-50 p-11 xs:p-0",
            useBlurBackdrop && "backdrop-filter backdrop-blur-sm",
            rootClasses[variant],
            rootClassName
          )}
        >
          <div
            className="relative h-full mx-auto w-full"
          >
            <div
              className={cn(
                "w-full md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl bg-white",
                containerClasses[variant],
                containerClassName
              )}
            >
              {
              }
              <div
                ref={modalInnerRef}
                className={`h-full ${variant !== "default" ? "overflow-y-auto" : " "
                  }`}
                style={{ maxHeight: "calc(100vh - 20px)" }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      )}

    </Portal>
  );
};

export default Modal;
