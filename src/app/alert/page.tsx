"use client";

import React from "react";
import { CircleCheck, X, ExternalLink, AlertTriangle } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import BackHome from "@/components/back-home";

type NotificationProps = {
  title: string;
  description: string;
  linkText?: string;
  linkIcon?: React.ReactNode;
  icon?: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({
  title,
  description,
  linkText,
  linkIcon,
  icon,
  gradientFrom,
  gradientTo,
  onClose,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          "relative max-w-md  border-[2.5px]  border-gray-50 shadow-lg p-4 rounded-lg flex items-start space-x-4",
          `bg-gradient-to-r ${gradientFrom} ${gradientTo}`
        )
      )}
    >
      <div className="p-2 bg-black flex items-center justify-center rounded-full">
        {icon || <CircleCheck className="h-4 w-4 text-green-500" />}
      </div>
      <div className="flex-1">
        <div className="font-bold text-lg">{title}</div>
        <div className="text-sm">{description}</div>
        {linkText && (
          <div className="font-bold text-md mt-2 flex items-center">
            {linkText}
            {linkIcon || <ExternalLink className="ml-2 w-4 h-4 inline-block" />}
          </div>
        )}
      </div>
      <div
        className="absolute top-2 right-2 cursor-pointer text-black"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </div>
    </div>
  );
};

const AlertDemo: React.FC = () => {
  const handleNotificationClose = () => {
    console.log("Notification closed");
  };

  return (
    <div className="max-w-md flex flex-col gap-4 h-screen items-center justify-center mx-auto ">
      <BackHome />
      <Notification
        title="Payment Received!"
        description="Your payment has been successfully received. You have unlocked premium services now."
        linkText="View Payment Details"
        linkIcon={<ExternalLink className="ml-2 w-4 h-4 inline-block" />}
        icon={<CircleCheck className="h-4 w-4 text-green-500" />}
        gradientFrom="from-green-400/10"
        gradientTo="to-white/5"
        onClose={handleNotificationClose}
      />
      <Notification
        title="Database Connection Failure"
        description="We're encountering issues with connecting to our system's database at the moment."
        icon={<AlertTriangle className="h-4 w-4 text-red-500" />}
        gradientFrom="from-red-400/10"
        gradientTo="to-white/5"
        onClose={handleNotificationClose}
      />
      <Notification
        title="New Privacy Policy"
        description="We have updated our privacy policy to ensure better protection of your personal information."
        icon={<CircleCheck className="h-4 w-4 text-blue-500" />}
        gradientFrom="from-blue-400/10"
        gradientTo="to-white/5"
        onClose={handleNotificationClose}
      />
    </div>
  );
};

export default AlertDemo;
