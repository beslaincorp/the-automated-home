export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  gumroadUrl: string;
  features: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: 'elk-blueprint',
    title: 'ELK M1 + HA Security Blueprint',
    description:
      'Complete integration guide with tested automations, zone mapping templates, and alarm response YAML. Built from a real 54-zone production system.',
    price: '$49',
    gumroadUrl: 'https://beslain.gumroad.com/l/elk-m1-ha-security-blueprint',
    features: [
      'TLS configuration walkthrough',
      'Zone mapping spreadsheet template',
      '5 production-tested automations',
      'Alarm response + notification YAML',
      'HomeKit bridge setup',
      'Troubleshooting guide',
    ],
    badge: 'Most Popular',
  },
  {
    id: 'jarvis-voice',
    title: 'Jarvis Voice Pack for Home Assistant',
    description:
      'Custom Piper TTS voice model + 9 ready-to-use automations. Give your smart home a voice without cloud subscriptions.',
    price: '$29',
    gumroadUrl: 'https://beslain.gumroad.com/l/ha-jarvis-voice-pack',
    features: [
      'Custom Jarvis Piper TTS model',
      '9 voice automations (arm, disarm, welcome, etc.)',
      'Multi-room speaker setup guide',
      'Snapcast architecture docs',
      'No cloud subscription needed',
    ],
  },
  {
    id: 'night-lights',
    title: 'Night Lights Automation Pack',
    description:
      'Motion-activated night light automations with time-based brightness, zone awareness, and clean YAML you can customize.',
    price: '$19',
    gumroadUrl: 'https://beslain.gumroad.com/l/ha-night-lights-pack',
    features: [
      'Plug-and-play YAML automations',
      'Time-based brightness curves',
      'Multi-zone motion support',
      'Configurable timeout + colors',
      'Works with any Z-Wave/Zigbee/WiFi lights',
    ],
  },
];

export const bundleUrl = 'https://beslain.gumroad.com';
export const bundlePrice = '$79';
