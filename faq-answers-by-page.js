/**
 * AVR Web Consulting FAQ answers grouped by page URL.
 * Exported from avr-web-consulting/inc/content-seeds.json.
 * Source records scanned: 100
 * Raw accordion FAQ entries: 960
 * Deduplicated page/question-answer entries: 910
 * Unique page paths: 93
 * Unique question texts across paths: 825
 * Questions with different answers on different pages: 11
 *
 * Keep page grouping: several questions intentionally have different answers on different pages.
 * Example: faqAnswersByPage[window.location.pathname]
 */
import { faqAnswersPart01 } from "./faq-answers-part-01.js";
import { faqAnswersPart02 } from "./faq-answers-part-02.js";
import { faqAnswersPart03 } from "./faq-answers-part-03.js";
import { faqAnswersPart04 } from "./faq-answers-part-04.js";
import { faqAnswersPart05 } from "./faq-answers-part-05.js";
import { faqAnswersPart06 } from "./faq-answers-part-06.js";
import { faqAnswersPart07 } from "./faq-answers-part-07.js";
import { faqAnswersPart08 } from "./faq-answers-part-08.js";
import { faqAnswersPart09 } from "./faq-answers-part-09.js";
import { faqAnswersPart10 } from "./faq-answers-part-10.js";

export const faqAnswersByPage = {
  ...faqAnswersPart01,
  ...faqAnswersPart02,
  ...faqAnswersPart03,
  ...faqAnswersPart04,
  ...faqAnswersPart05,
  ...faqAnswersPart06,
  ...faqAnswersPart07,
  ...faqAnswersPart08,
  ...faqAnswersPart09,
  ...faqAnswersPart10,
};

export default faqAnswersByPage;
