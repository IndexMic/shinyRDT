library(shiny)
library(shinyRDT)

ui <- fluidPage(
  titlePanel("reactR HTMLWidget Example"),
  shinyRDTOutput('widgetOutput')
)

server <- function(input, output, session) {
  output$widgetOutput <- renderShinyRDT({
    shinyRDT(mtcars)
  })
}

shinyApp(ui, server)