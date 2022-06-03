import { useEffect, useState } from "react";

import { Widget } from "components/Widget";

import { api } from "services/api";
import { feedbackTypes } from "data/feedbackTypes";

type FeedbackType = keyof typeof feedbackTypes
interface FeedbackProps {
  id: string
  type: FeedbackType
  comment: string
  screenshot: string | null
}

export function App() {
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([])

  const loadFeedbacks = async () => {
    const { data } = await api.get<{ feedbacks: FeedbackProps[] }>('/feedbacks')

    setFeedbacks(data.feedbacks)
  }

  useEffect(() => {
    loadFeedbacks()
  }, [])

  return (
    <div className="flex justify-center p-10">
      <main className="w-full max-w-5xl flex flex-col items-center">
        <h1 className="uppercase text-4xl">Listagem dos Feedbacks</h1>

        <ul className="flex flex-col w-full gap-y-4 mt-16">
          {feedbacks.map(feedback => (
            <li key={feedback.id} className="bg-zinc-900 h-14 rounded-lg flex items-center gap-x-3 overflow-hidden hover:cursor-pointer hover:scale-[1.03] duration-300">
              <span className="px-4 bg-zinc-800 h-full flex items-center">
                <img 
                  src={feedbackTypes[feedback.type].image.source}
                  alt={feedbackTypes[feedback.type].image.alt}
                  width={28}
                />
              </span>
              
              <p>{feedback.comment}</p>
            </li>
          ))}
        </ul>

      </main>
      
      <Widget />
    </div>
  )
}

