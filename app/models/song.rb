class Song < ApplicationRecord
    validates :title, presence: true

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_one_attached :song
end