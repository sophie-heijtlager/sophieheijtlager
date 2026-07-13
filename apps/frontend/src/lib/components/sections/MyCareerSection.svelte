<script lang="ts">
	import { onMount } from "svelte";
  import { gsap } from "gsap";

	const { section } = $props();

  onMount(() => {
    const timelineWrapper = document.querySelector('.timeline-wrapper');
		const mm = gsap.matchMedia();

    if (!timelineWrapper) return;

    function getScrollAmount() {
      let timelineWrapperWidth = timelineWrapper.scrollWidth;
      return -(timelineWrapperWidth - window.innerWidth);
    }

    console.log(getScrollAmount());

		mm.add('(min-width: 768px)', () => {
      gsap.to(timelineWrapper, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: '.section-my-career',
          start: 'top -25%',
          end: `bottom +=${getScrollAmount() * -1}`,
          pin: true,  
          scrub: 1,
          invalidateOnRefresh:true,
          markers: true
        }
      })
    });
  })
  
</script>

<section class="section-my-career section-lg" data-scheme="primary-light">
  <div class="container my-career">
    <div class="my-career__heading">
      <h3>{section.title}</h3>
      <p>{section.paragraph}</p>
    </div>

    <div class="my-career__timeline">
      <div class="timeline-years">years</div>

      <div class="timeline-wrapper">
        <div class="timeline-wrapper__lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="timeline-wrapper__cards">
          <div>card</div>
          <div>card</div>
          <div>card</div>
          <div>card</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style scoped>
  .section-my-career {
    @media (min-width: 768px) {
      height: calc(100dvh + 100px);
    }
  }

  .my-career {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);

    & .my-career__heading {
      display: flex;
      justify-content: space-between;
      gap: var(--space-md);
      flex-wrap: wrap;

      & p {
        max-width: 500px;
      }
    }

    .my-career__timeline {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);

      & .timeline-years {
        display: none;

        @media (min-width: 768px) {
          display: grid;
        }
      }

      & .timeline-wrapper {
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
          position: relative;
          display: grid;
  
          grid-template-columns: repeat(17, 100px);
        }
        
        & .timeline-wrapper__lines {
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);

          @media (min-width: 768px) {
            gap: unset;
            display: grid;
            grid-template-columns: repeat(17, 100px);
          }


          & .line {
            width: 100%;
            border-block-start: 1px dashed var(--pink-200);
            
            @media (min-width: 768px) {
              width: 1px;
              height: calc(100dvh - 100px);
              border: 0;
              border-inline-start: 1px dashed var(--pink-200);
            }
          }
        }

        & .timeline-wrapper__cards {
          position: absolute;
          top: 50px;

          display: grid;
          width: 100%;
          grid-template-columns: subgrid;
          grid-auto-flow: column;
        }
      }
    }

  }
</style>