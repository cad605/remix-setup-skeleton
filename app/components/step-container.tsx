import { useEffect, useRef } from 'react'
import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

export const loader: LoaderFunction = async ({ params, request }) => {
    if (!product) {
      throw new Response('Not Found', { status: 404 })
    }
}

export default function StepContainer() {
  const steps = useLoaderData();
  let activeRef = useRef<Element | null>(null)

  useEffect(() => {
    // query all step containers
    const stepContainers = document.querySelectorAll('.step-container')
    
    // construct an IntersectionObserver
    const io_observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeRef.current = entry.target
          }
        })
      },
      {
        root: document.body,
        rootMargin: '0px 0px -50% 0px',
        threshold: [0.25, 0.5, 0.75],
      },
    )
    // attach observer to each step
    stepContainers.forEach(element => {
      io_observer.observe(element)
    })

    return () =>
    // clean up by removing observers
      stepContainers.forEach(element => {
        io_observer.unobserve(element)
      })
  }, [])

  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}
