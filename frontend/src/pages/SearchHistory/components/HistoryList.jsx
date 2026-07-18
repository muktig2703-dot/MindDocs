import { AnimatePresence } from "framer-motion";
import HistoryItem from "./HistoryItem";

function HistoryList({
  history,
  deleteHistory,
}) {
  const groups = {
    Today: [],
    Yesterday: [],
    Earlier: [],
  };

  history.forEach((item) => {
    const diff =
      (new Date() -
        new Date(item.createdAt)) /
      (1000 * 60 * 60 * 24);

    if (diff < 1)
      groups.Today.push(item);
    else if (diff < 2)
      groups.Yesterday.push(item);
    else groups.Earlier.push(item);
  });

  return (
    <div className="mt-8 space-y-10">
      {Object.entries(groups).map(
        ([title, items]) =>
          items.length > 0 && (
            <section key={title}>
              <h2
                className="mb-5 text-lg font-semibold"
                style={{
                  color:
                    "var(--text-secondary)",
                }}
              >
                {title}
              </h2>

              <div className="space-y-5">
                <AnimatePresence>
                  {items.map((item) => (
                    <HistoryItem
                      key={item.id}
                      item={item}
                      deleteHistory={
                        deleteHistory
                      }
                    />
                  ))}
                </AnimatePresence>
              </div>
            </section>
          )
      )}
    </div>
  );
}

export default HistoryList;