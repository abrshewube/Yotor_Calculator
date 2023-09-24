import { Injectable } from '@angular/core';
import { createParser, getDiagnostics } from 'grammarkdown';

@Injectable({
  providedIn: 'root'
})
export class GrammarCheckerService {
  checkGrammar(text: string): string[] {
    const parser = createParser();
    parser.feed(text);
    const diagnostics = getDiagnostics(parser);
    return diagnostics.map(diagnostic => diagnostic.message);
  }
}
