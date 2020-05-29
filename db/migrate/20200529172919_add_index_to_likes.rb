class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, :user_id
    add_index :likes, :song_id
  end
end
