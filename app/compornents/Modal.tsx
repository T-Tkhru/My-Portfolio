import React from "react";

import { FaGithub } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  githubUrl?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  image,
  url,
  githubUrl,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 md:p-8 max-w-xs md:max-w-3xl w-full relative h-[80vh] flex flex-col">
        {/* ヘッダー領域（×ボタン用） */}
        <div
          className="flex justify-end items-center"
          style={{ height: "40px", minHeight: "40px" }}
        >
          <button
            className="p-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="閉じる"
            style={{ lineHeight: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              className="md:w-10 md:h-10 w-6 h-6"
            >
              <line
                x1="10"
                y1="10"
                x2="30"
                y2="30"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="30"
                y1="10"
                x2="10"
                y2="30"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        {/* 本体領域 */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-h-60 md:max-h-80 object-contain rounded mb-6"
              style={{ objectFit: "contain" }}
            />
          )}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            {description}
          </p>
          <div className="flex flex-row items-center justify-center gap-4 mt-auto mb-2">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition font-kosugimaru"
              >
                見てみる
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black text-3xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
