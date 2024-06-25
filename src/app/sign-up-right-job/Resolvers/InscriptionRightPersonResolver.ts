import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscriptionRightPersonResolver {

  constructor(private apollo: Apollo) {}
  createPersonAndRelatedEntities(personInput: any): Observable<any> {

    const CREATE_PERSON = gql`
      mutation CreatePerson($input: PersonInput!) {
        createPerson(input: $input) {
          firstName
          lastName
          mailAddress
          phoneNumber
          linkedIn
          image
          address
          country
          city
          website
          targetTitle
          professionalSummary
          password
          lastConnection
        }
      }
    `;

    return this.apollo.mutate({
      mutation: CREATE_PERSON,
      variables: { input: personInput }
    }).pipe(
      switchMap(() => {
        // No need to retrieve personId here, it's handled in the backend
        // Prepare mutations for related entities
        const CREATE_CERTIFICATIONS = gql`
          mutation CreateCertifications($certifications: [CertificationInput!]!) {
            createCertifications(certifications: $certifications) {
              certificationName
              organization
              dateOfCompletion
            }
          }
        `;

        const CREATE_EDUCATIONS = gql`
          mutation CreateEducations($educations: [EducationInput!]!) {
            createEducations(educations: $educations) {
              institutionName
              fieldOfStudy
              location
              type
              startDate
              endDate
            }
          }
        `;

        const CREATE_EXPERIENCES = gql`
          mutation CreateExperiences($experiences: [ExperienceInput!]!) {
            createExperiences(experiences: $experiences) {
              companyName
              position
              location
              type
              startDate
              endDate
              companyDescription
            }
          }
        `;

        const CREATE_LANGUAGES = gql`
          mutation CreateLanguages($languages: [LanguageInput!]!) {
            createLanguages(languages: $languages) {
              langage
              level
            }
          }
        `;

        const CREATE_SKILLS = gql`
          mutation CreateSkills($skills: [SkillInput!]!) {
            createSkills(skills: $skills) {
              skill
            }
          }
        `;

        const CREATE_INTEREST_HOBBIES = gql`
          mutation CreateInterestHobbies($interestHobbies: [InterestHobbyInput!]!) {
            createInterestHobbies(interestHobbies: $interestHobbies) {
              interestAndHobbie
            }
          }
        `;

        // Execute mutations for related entities
        return this.apollo.mutate({
          mutation: CREATE_CERTIFICATIONS,
          variables: { certifications: personInput.certifications }
        }).pipe(
          switchMap(() => this.apollo.mutate({
            mutation: CREATE_EDUCATIONS,
            variables: { educations: personInput.educations }
          })),
          switchMap(() => this.apollo.mutate({
            mutation: CREATE_EXPERIENCES,
            variables: { experiences: personInput.experiences }
          })),
          switchMap(() => this.apollo.mutate({
            mutation: CREATE_LANGUAGES,
            variables: { languages: personInput.languages }
          })),
          switchMap(() => this.apollo.mutate({
            mutation: CREATE_SKILLS,
            variables: { skills: personInput.skills }
          })),
          switchMap(() => this.apollo.mutate({
            mutation: CREATE_INTEREST_HOBBIES,
            variables: { interestHobbies: personInput.interest_Hobbies }
          }))
          // Add switchMap for other related entities similarly
        );
      }),
      catchError(error => {
        console.error('Error creating person and related entities:', error);
        throw error;
      })
    );
  }
}
