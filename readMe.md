

# For linking the feature file with steps
    add "cucumberautocomplete.steps": ["steps Path"] in settings.json under .vscode folder
    and for restricting the step without implementation  : "cucumberautocomplete.strictGherkinCompletion": true

# import for Json files
    In typescript for importing json as an object we need to update the tsconfig file by adding :
    "resolveJsonModule": true
    "esModuleInterop": true,