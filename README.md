# Assumptions:
1. mlsId is unique 

# Decisions:
1. Did not format images as squares from the design to preserve more of the original ratio 
2. Used `<img>` tags instead of `background-image` for property pictures since it's part of the content for better SEO and accessibility

# Leftover items:
1. The condition to display the correct icon is not properly set, although the state is preserved correctly
2. Unit tests to cover the components and favorite/unfavorite actions

# Other Improvement Directions:
1. JS
    - sort/filter by fields in listing details
    - listing details if clicked on a listing
2. CSS
    - Extract common styles into global css
    - Extract styles into a co-located folder with the component
    - Use libraries like Emotion
3. App
    - Build a PWA
    - Measure the bundle size and performance in CI/CD pipeline
