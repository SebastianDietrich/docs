import { EndpointValidationError } from '@vaadin/fusion-frontend';

import { DateEndpoint } from 'Frontend/generated/endpoints';

export async function callEndpoint() {
  try {
    // pass an illegal date
    const tomorrow = await DateEndpoint.getTomorrow('2021-02-29');
    console.log(tomorrow);
    // handle result...
  } catch (error) {
    if (error instanceof EndpointValidationError) {
      error.validationErrorData.forEach(({ parameterName, message }) => {
        console.warn(parameterName); // "date"
        console.warn(message); // "Unable to deserialize an endpoint method parameter into type 'java.time.LocalDate'"
      });
    } else {
      // handle other error types...
    }
  }
}
