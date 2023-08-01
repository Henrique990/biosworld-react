import { useTranslation } from "react-i18next";

export default function Faqs() {
  const { t } = useTranslation();

  return (
    <section className="">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-3xl my-10 font-['Cattino'] text-center font-semibold text-green-400 lg:text-5xl dark:text-green-400">Frequently Asked Questions (FAQs)</h1>
        <h2 className="text-2xl font-['Cattino'] text-center font-semibold text-gray-800 lg:text-3xl dark:text-white">
          {t("faq-title")}
        </h2>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-1")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer1")}
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-2")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-2")}
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-3")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-3")}
              </p>
              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-3-tier1")}
              </p>
              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-3-tier2")}
              </p>
              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-3-tier3")}
              </p>
              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-3-tier4")}
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-4")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-4")}
              </p>
            </div>
          </div>
          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-5")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-5")}
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-6")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-6")}
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-7")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-7")}
              </p>
            </div>
          </div>
          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-8")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-8")}
              </p>
            </div>
          </div>
          <div>
            <div className="inline-block p-3 text-white bg-green-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-gray-700 dark:text-white">
                {t("faq-question-9")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-gray-500 dark:text-gray-300">
                {t("faq-answer-9")}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-center font-bold text-sm text-gray-500 dark:text-gray-300">
            {t("faq-text-finally")}
          </p>
        </div>
      </div>
    </section>
  );
}
