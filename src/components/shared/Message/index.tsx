import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import React from 'react';

export enum MessageType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

interface IMessage {
  type: MessageType;
  text: string;
}

const Message = ({ type, text }: IMessage) => {
  const color = (messageType: MessageType) => {
    let colorStyle = '';
    switch (messageType) {
      case MessageType.SUCCESS:
        colorStyle = 'bg-green-100 text-green-700';
        break;
      case MessageType.ERROR:
        colorStyle = 'bg-red-100 text-red-700';
        break;
      case MessageType.WARNING:
        colorStyle = 'bg-yellow-100 text-yellow-700';
        break;
      case MessageType.INFO:
        colorStyle = 'bg-blue-100  text-blue-700';
        break;

      default:
        break;
    }
    return colorStyle;
  };
  const icon = (iconType: MessageType) => {
    let iconComponent = null;
    switch (iconType) {
      case MessageType.SUCCESS:
        iconComponent = <CheckCircleIcon className="w-6 h-6" />;
        break;
      case MessageType.ERROR:
        iconComponent = <XCircleIcon className="w-6 h-6" />;
        break;
      case MessageType.WARNING:
        iconComponent = <ExclamationCircleIcon className="w-6 h-6" />;
        break;
      case MessageType.INFO:
        iconComponent = <InformationCircleIcon className="w-6 h-6" />;
        break;

      default:
        break;
    }

    return iconComponent;
  };

  return (
    <div
      className={`flex items-center gap-2  rounded-lg p-4 mb-4 text-sm ${color(
        type,
      )}`}
      role="alert"
    >
      {icon(type)}

      <div>{text}</div>
    </div>
  );
};

export default Message;
