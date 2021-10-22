# json.partial! "workouts/workout", workout: @workout

  json.(@workout, :id, :name, :date_completed, :created_at, :updated_at)

  json.exercises @workout.exercises do |exercise|
    json.partial! 'exercises/exercise', exercise: exercise
  end
