from __future__ import print_function
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/documents',
          'https://www.googleapis.com/auth/drive.appdata',
          'https://www.googleapis.com/auth/drive']

# The ID of a sample document.
DOCUMENT_ID = '1FOrHyHTlRTC6MWIjdAIGvGGOfUNTJwEgWXbQ_QYT7hM'

def main():
    """Shows basic usage of the Docs API.
    Prints the title of a sample document.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server()
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('docs', 'v1', credentials=creds)

    # create doc

    title = 'My Document'
    body = {
        'title': title
    }
    # doc = service.documents().create(body=body).execute()
    doc = service.documents().get(documentId=DOCUMENT_ID).execute()
    print('Created document with title: {0}'.format(
        doc.get('title')))


    # add text
    requests = [
         {
            'insertText': {
                'location': {
                    'index': 1,
                },
                'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
            }
        }
    ]

    result = service.documents().batchUpdate(documentId=DOCUMENT_ID, body={'requests': requests}).execute()

if __name__ == '__main__':
    main()