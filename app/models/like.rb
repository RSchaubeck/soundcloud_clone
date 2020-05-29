class Like < ApplicationRecord
    validates :user_id, :song_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :song,
        foreign_key: :song_id,
        class_name: :Song

end