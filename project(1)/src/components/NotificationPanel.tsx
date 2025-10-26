import React, { useState, useEffect } from "react";

import { X, Bell, CheckCircle, AlertCircle, Clock, Star } from 'lucide-react';

interface NotificationPanelProps {
  currentLanguage: string;
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    type: 'policy',
    icon: CheckCircle,
    title: 'Policy Recommendation Ready!',
    message: 'Your AI-powered health insurance recommendations are ready for review.',
    time: '2 minutes ago',
    unread: true,
    color: 'green'
  },
  {
    id: 2,
    type: 'reminder',
    icon: Clock,
    title: 'Premium Due Reminder',
    message: 'Your vehicle insurance premium of ₹4,500 is due in 5 days.',
    time: '1 hour ago',
    unread: true,
    color: 'orange'
  },
  {
    id: 3,
    type: 'achievement',
    icon: Star,
    title: 'Achievement Unlocked!',
    message: 'Congratulations! You\'ve completed your risk assessment and earned 50 points.',
    time: '3 hours ago',
    unread: false,
    color: 'purple'
  },
  {
    id: 4,
    type: 'alert',
    icon: AlertCircle,
    title: 'New Community Pool Available',
    message: 'Join the "Young Professionals Health Pool" and save up to 25% on premiums.',
    time: '1 day ago',
    unread: false,
    color: 'blue'
  },
  {
    id: 5,
    type: 'policy',
    icon: CheckCircle,
    title: 'Claim Status Update',
    message: 'Your health insurance claim #INS2024001 has been approved for ₹15,000.',
    time: '2 days ago',
    unread: false,
    color: 'green'
  }
];

const NotificationPanel: React.FC<NotificationPanelProps> = ({ currentLanguage, onClose }) => {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-xs text-blue-100">{unreadCount} unread messages</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                  notification.unread ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-${notification.color}-100 flex-shrink-0`}>
                    <IconComponent className={`h-4 w-4 text-${notification.color}-600`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`text-sm font-semibold ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                        {notification.title}
                      </h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {notification.message}
                    </p>
                    
                    <p className="text-xs text-gray-400">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
          <div className="flex space-x-3">
            <button className="flex-1 text-center py-2 px-4 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              Mark All Read
            </button>
            <button className="flex-1 text-center py-2 px-4 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;