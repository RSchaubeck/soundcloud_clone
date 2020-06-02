class User < ApplicationRecord

    validates :username, :password_digest, :session_token, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :songs,
        foreign_key: :artist_id,
        class_name: :Song

    has_many :likes,
        foreign_key: :user_id,
        class_name: :Like

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        bc_pw = BCrypt::Password.new(self.password_digest)
        bc_pw.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.save!
        self.session_token
    end
end
