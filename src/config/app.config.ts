interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Team Member', 'Collaborator', 'Administrator', 'End User'],
  tenantName: 'Company',
  applicationName: 'mobile app generation application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read app information',
    'Read feature information',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage applications',
    'Manage features',
    'Manage bugs',
    'Manage test cases',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/df6ee4c9-29d6-4d38-9e8e-6d40dfe06dbe',
};
