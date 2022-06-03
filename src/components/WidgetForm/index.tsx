import { useState } from "react";

import { feedbackTypes } from 'data/feedbackTypes'
import { FeedbackTypeStep, FeedbackContentStep, FeedbackSuccessStep } from "./Steps/";

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

  function handleRestartFeedback(){
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback} />
          )}
        </>
      )}
      
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="/" className="underline underline-offset-1">Leonardo Vargas</a>
      </footer>
    </div>
  )
}