# Create the R package (Run this the first time)
withr::with_dir(
  "~/R/shinyRDT",
  reactR::scaffoldReactWidget(
    "shinyRDT", 
    list("react-datasheet" = "^1.4.6"),
    edit = FALSE
  )
)

# Install the package (Run this to refresh package)
devtools::document()
devtools::install()
