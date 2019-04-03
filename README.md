## Notes
1. Even if there is only one input, it needs to somehow be validated, even if it's done through HTML.
2. Ideally, we would display an error message for each input individually.
3. Computed properties are reactive.
4. Re-inventing the wheel.
5. The $dirty property represents if a model has been touched.
6. Use case for showing the errors on blur, is in email inputs.
7. The validators have a single responsibility.
8. If we didn't have set up the required validator, null would be a valid value.
9. With conditional validation a rule applies to a field, only when a condition is met.
10. Each validator should have its own responsibility.