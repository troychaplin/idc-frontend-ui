// Create a config file or environment variable
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/idc-frontend-ui' : '';

export const FooterDisclaimer = () => {
  return (
    <div className="p-8 idc-footer-disclaimer bg-idc-blue-900">
      <div className="flex flex-col items-center max-w-6xl gap-4 mx-auto text-sm font-light text-white md:flex-row">
        <div className="w-full md:flex-auto">
          <div className="flex flex-col w-full gap-4 mx-auto md:flex-row">
            <a
              href="https://www.bbb.org/ca/on/ottawa/profile/legal-information-services/international-documents-canada-0117-50321#sealclick"
              title="Click for the Business Review of International Documents Canada, a Legal Information Services in Ottawa ON"
              className="mx-auto grow-0 shrink-0 md:mx-0"
              target="_blank" rel="noreferrer"
            >
              <img
                src={`${BASE_PATH}/assets/logos/bbb-logo.png`}
                alt="Click for the BBB Business Review of this Legal Information Services in Ottawa ON"
                width="120"
                height="42"
              />
            </a>
            <p className="text-center md:max-w-64 md:text-left">
              Proudly recognized by with a Torch Award for Market Place Trust
            </p>
          </div>
        </div>

        <div className="w-full pt-4 border-t border-solid md:flex-auto border-white/10 md:border-0 md:pt-0">
          <p className="text-center md:text-right">
            Copyright © 2020 International Documents Canada. All rights reserved.
            <span className="block mt-2">
              <a href="#" className="font-bold hover:underline">
                About Us
              </a>{' '}
              |{' '}
              <a href="#" className="font-bold hover:underline">
                Privacy Policy
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
