'use client';

import { useState, useCallback, KeyboardEvent } from 'react';
import styles from './FaqAccordion.module.scss';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
  /** Optional prefix for unique IDs when multiple accordions on one page */
  idPrefix?: string;
}

export default function FaqAccordion({ items, idPrefix = 'faq' }: FaqAccordionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = useCallback((index: number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      const buttons = document.querySelectorAll<HTMLButtonElement>(
        `[data-accordion-prefix="${idPrefix}"]`
      );
      const currentIndex = Array.from(buttons).findIndex((btn) => btn === event.currentTarget);

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          if (currentIndex < buttons.length - 1) {
            buttons[currentIndex + 1].focus();
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (currentIndex > 0) {
            buttons[currentIndex - 1].focus();
          }
          break;
        case 'Home':
          event.preventDefault();
          buttons[0]?.focus();
          break;
        case 'End':
          event.preventDefault();
          buttons[buttons.length - 1]?.focus();
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          toggleItem(index);
          break;
      }
    },
    [idPrefix, toggleItem]
  );

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isExpanded = expandedItems.has(index);
        const headingId = `${idPrefix}-heading-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div key={index} className={styles.item} data-expanded={isExpanded}>
            <h3 className={styles.heading}>
              <button
                type="button"
                className={styles.trigger}
                id={headingId}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                data-accordion-prefix={idPrefix}
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                <span className={styles.question}>{item.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={styles.panel}
              hidden={!isExpanded}
            >
              <div className={styles.answer}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
