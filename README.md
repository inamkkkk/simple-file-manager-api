# Simple File Manager API

A simple Node.js API for managing files on the server.

## Features

- Upload files
- Download files
- Delete files

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

## Configuration

-   Set the `UPLOAD_DIRECTORY` environment variable to the directory where uploaded files will be stored.
-   Set the `PORT` environment variable to the port the server will listen on.

## Usage

1.  Start the server:

    
    npm start
    

2.  Use the API endpoints:

    -   `POST /upload`: Upload a file (multipart/form-data).
    -   `GET /download/:filename`: Download a file.
    -   `DELETE /delete/:filename`: Delete a file.

## Example


curl -X POST -F file=@path/to/your/file http://localhost:3000/upload
curl http://localhost:3000/download/yourfile.txt --output downloaded_file.txt
curl -X DELETE http://localhost:3000/delete/yourfile.txt
