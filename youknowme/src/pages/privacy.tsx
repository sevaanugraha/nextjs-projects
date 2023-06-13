import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-gray-800 px-4 py-20 text-center text-4xl font-semibold text-white lg:py-24">
        {t('Privacy Policy')}
      </div>

      <div className="flex min-h-screen flex-col">
        <div className="flex-grow py-20">
          <div className="mx-auto max-w-4xl px-8">
            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                {t(
                  'Your privacy is important to us, and at YouKnowMe, we are committed to protecting your personal information. This Privacy Policy explains how we handle your data when you visit and interact with our web app. Please note that by using YouKnowMe, you consent to the data practices described in this statement. If you have any questions or concerns, feel free to contact us using the information provided at the end of this policy.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">
                {t('Collection of Your Personal Information')}
              </h3>
              <p>
                {t(
                  'To enhance your experience on YouKnowMe, we may collect personal information, such as:'
                )}
              </p>
              <ul className="list-inside list-disc">
                <li>{t('First and Last Name')}</li>
                <li>{t('Email Address')}</li>
                <li>{t('Preferred interests or categories')}</li>
                <li>{t('Documents, contents and web url added to train bot.')}</li>
                <li>
                  {t(
                    'and related personal information asked on user input field on register and customer dashboard.'
                  )}
                </li>
              </ul>
              <p>
                {t(
                  'If you purchase any premium features or services from YouKnowMe, we may also collect your billing and credit card information to process the transaction. Keep in mind that if you disclose any personal information in public forums or comment sections, it may be collected and used by others. We only collect personal information that you voluntarily provide to us when you choose to use certain features on our web app.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">
                {t('Use of Your Personal Information')}
              </h3>
              <p>
                {t(
                  'YouKnowMe collects and uses your personal information to operate and improve our web app, deliver the services you have requested, and inform you of other products or services available from YouKnowMe and our affiliates.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">
                {t('Sharing Information with Third Parties')}
              </h3>
              <p>
                {t(
                  'YouKnowMe does not sell, rent, or lease your personal information to third parties. We may occasionally contact you on behalf of external business partners about offerings that may interest you, but your personal information is not transferred to these partners. We may share data with trusted partners to help with statistical analysis, customer support, or arrange for deliveries. All third parties are prohibited from using your personal information except for providing services to YouKnowMe, and they are required to maintain the confidentiality of your information. YouKnowMe may disclose your personal information if required by law or if we believe that such action is necessary to comply with legal processes, protect our rights or property, or ensure the safety of our users or the public.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t('Tracking User Behavior')}</h3>
              <p>
                {t(
                  'We may track user behavior within YouKnowMe to determine which features are the most popular and to deliver customized content based on your preferences. This data may include:'
                )}
              </p>
              <ul className="list-inside list-disc">
                <li>{t('Pages visited')}</li>
                <li>{t('Time spent on pages')}</li>
                <li>{t('Items downloaded')}</li>
                <li>{t('Clicks and interactions')}</li>
              </ul>
              <h3 className="font-semibold text-gray-800">
                {t('Automatically Collected Information')}
              </h3>
              <p>
                {t(
                  'When you visit YouKnowMe, we may automatically collect information about your device, such as your IP address, browser type, domain names, access times, and referring website addresses. This information helps us maintain the quality of our service and gather general statistics about user behavior.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t('Use of Cookies')}</h3>
              <p>
                {t(
                  "YouKnowMe may use cookies to personalize your experience and save you time. A cookie is a text file that is stored on your device by a web server, and it can only be read by the server that issued it. Cookies help us remember your preferences, so you don't have to re-enter information each time you visit."
                )}
              </p>
              <p>
                {t(
                  'You can choose to accept or decline cookies by adjusting your browser settings. However, declining cookies may prevent you from fully experiencing all the features of YouKnowMe.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t('Links to Other Websites')}</h3>
              <p>
                {t(
                  'YouKnowMe may contain links to other websites. We are not responsible for the content or privacy practices of these sites, and we encourage you to read their privacy policies when visiting them.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">
                {t('Security of Your Personal Information')}
              </h3>
              <p>
                {t(
                  'We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. YouKnowMe employs SSL encryption to secure any personal data transmitted, such as credit card information.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t('Children Under 13')}</h3>
              <p>
                {t(
                  'YouKnowMe does not knowingly collect personally identifiable information from children under the age of 13. If you are under 13, please ask your parent or guardian for permission before using our web app.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t('Email Communications')}</h3>
              <p>
                {t(
                  'YouKnowMe may occasionally send you emails for announcements, promotional offers, alerts, confirmations, surveys, or other general communication. When you open an email from YouKnowMe or click on a link within the email, we may receive a notification to help improve our services.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t('External Data Storage Sites')}</h3>
              <p>
                {t(
                  'We may store your data on servers provided by third-party hosting vendors with whom we have contracted.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t('Changes to This Statement')}</h3>
              <p>
                {t(
                  'YouKnowMe reserves the right to change this Privacy Policy from time to time. Your continued use of YouKnowMe after such modifications will constitute your acknowledgment of the modified Privacy Policy and your agreement to abide and be bound by it.'
                )}
              </p>
              <h3 className="font-semibold text-gray-800">{t('Contact Information')}</h3>
              <p>
                {t(
                  'YouKnowMe welcomes your questions or comments regarding this Privacy Policy. If you believe that YouKnowMe has not adhered to this policy, please contact us at: info@youknowme.xyz'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
