'use client';
import React from 'react';

declare global {
	interface Window {
		chatwootSettings?: any;
		chatwootSDK?: any;
		BrevoConversationsID?: string;
		[key: string]: any;
	}
}

class ChatwootWidget extends React.Component {
	componentDidMount() {
		// Add Chatwoot Settings

		// Paste the script from inbox settings except the <script> tag
		(function (d, w, c) {
			w.BrevoConversationsID = '682202610736a833690bb3be';
			w[c] =
				w[c] ||
				function () {
					(w[c].q = w[c].q || []).push(arguments);
				};
			var s = d.createElement('script');
			s.async = true;
			s.src =
				'https://conversations-widget.brevo.com/brevo-conversations.js';
			if (d.head) d.head.appendChild(s);
		})(document, window, 'BrevoConversations');
	}

	render() {
		return null;
	}
}

export default ChatwootWidget;
