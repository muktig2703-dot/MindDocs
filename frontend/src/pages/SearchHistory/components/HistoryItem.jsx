import {
  Clock3,
  FileText,
  Trash2,
} from "lucide-react";

import { motion } from "framer-motion";
import { formatRelativeTime } from "../../../utils/time";
import { useNavigate } from "react-router-dom";
import { useDocuments } from "../../../context/DocumentContext";
function HistoryItem({
  item,
  deleteHistory,
}) {

const time = formatRelativeTime(
  item.createdAt
);

const navigate = useNavigate();

const { setSelectedQuestion } = useDocuments();

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="
        rounded-3xl
        border
        p-6
      "
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex justify-between">

        <div className="flex-1">

          <h3
            className="text-lg font-semibold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {item.question}
          </h3>

          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-5
              text-sm
            "
            style={{
              color:
                "var(--text-secondary)",
            }}
          >
            <div className="flex items-center gap-2">
              <FileText size={16} />
              {item.filename}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {time}
            </div>
          </div>
  <div className="mt-5">
  <button
  onClick={() => {
    setSelectedQuestion(item.question);
    navigate("/dashboard");
  }}
  className="
    rounded-xl
    px-4
    py-2
    text-sm
    transition-all
    duration-300
    hover:scale-105
  "
  style={{
    background: "var(--primary)",
    color: "#fff",
  }}
>
  Open Chat
</button>
</div>
        </div>

        <button
          onClick={() =>
            deleteHistory(item.id)
          }
          className="
            rounded-xl
            p-2
            transition
            hover:bg-red-500/20
          "
        >
          <Trash2 size={18} />
        </button>

      </div>
    </motion.div>
  );
}

export default HistoryItem;